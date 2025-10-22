pipeline {
	agent { label 'pop' }

	environment {
		REPO_URL = 'https://github.com/Kunal061/react-app-deploy_v1.git'
		NODE_ENV = 'production'
		PORT = '5000'
	}

	options {
		ansiColor('xterm')
		timeout(time: 15, unit: 'MINUTES')
		buildDiscarder(logRotator(numToKeepStr: '10'))
	}

	stages {
		stage('Prepare') {
			steps {
				script {
					// ensure workspace is clean
					deleteDir()
				}
			}
		}

		stage('Clone') {
			steps {
				// checkout the requested repo explicitly
				git url: env.REPO_URL, branch: 'main'
			}
		}

		stage('Install') {
			steps {
				sh 'npm ci'
			}
		}

		stage('Build') {
			steps {
				sh 'npm run build'
			}
		}

		stage('Archive') {
			steps {
				archiveArtifacts artifacts: 'dist/**', fingerprint: true
			}
		}

		stage('Smoke Start') {
			steps {
					// Start the app in the background for a short smoke test then kill it
					sh '''
						# determine public IP (fallback to localhost)
						IP=$(curl -s ifconfig.me || echo "127.0.0.1")

						# Use PORT if already set in the environment, otherwise default to 3000
						export PORT=${PORT:-3000}
						# Force the server to bind to 0.0.0.0 so it's reachable externally
						export HOST=${HOST:-0.0.0.0}

						echo "Starting app with HOST=$HOST PORT=$PORT (public IP: $IP)"

						# Start using inline assignment so the child process definitely gets the vars
						HOST=$HOST PORT=$PORT npm run start &
						pid=$!
						echo "started pid=$pid"

						# wait a few seconds for startup
						sleep 5

						# try to curl the public IP and port
						if command -v curl >/dev/null 2>&1; then
							echo "curl http://$IP:$PORT/"
							curl -sSf "http://$IP:$PORT/" || true
						fi

						# kill the background process if still running
						kill $pid || true
					'''
			}
		}
	}

	post {
		always {
			sh 'echo "Cleaning workspace"'
			deleteDir()
		}
		success {
			echo 'Build succeeded.'
		}
		failure {
			echo 'Build failed. See logs above.'
		}
	}
}

