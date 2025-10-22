pipeline {
    agent { label 'pop' }

    options {
        // Prevent concurrent builds; if a new build starts, abort the previous.
        disableConcurrentBuilds()
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    def isNodeInstalled = sh(script: "command -v node || true", returnStdout: true).trim()
                    def isNpmInstalled = sh(script: "command -v npm || true", returnStdout: true).trim()
                    if (!isNodeInstalled || !isNpmInstalled) {
                        echo 'Node.js or npm not found, installing...'
                        sh '''
                          sudo apt update
                          sudo apt install -y nodejs npm
                        '''
                    } else {
                        echo 'Node.js and npm already installed'
                    }
                }
            }
        }

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Kunal061/react-app-deploy_v1.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                // Force reinstall esbuild to fix exec format error
                sh 'npm install esbuild --force'
            }
        }

        stage('Build and Run App') {
            steps {
                sh 'npm run build'
                // Notify user about URL
                sh '''
                  IP=$(curl -s ifconfig.me)
                  PORT=3000
                  echo "Your Next.js app will run at http://$IP:$PORT"
                '''
                // Run app in foreground; this will keep the Jenkins job running until you abort
                sh '''
                  npm start
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
