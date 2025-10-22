pipeline {
    agent { label 'pop' }

    environment {
        PORT = '3000'
        HOST = '0.0.0.0'
    }

    options {
        // Abort previous running build if new build starts
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
                dir('client') {
                    // Clean node_modules and previous builds for a fresh install
                    sh 'rm -rf node_modules dist'
                    sh 'npm install'
                    sh 'npm install esbuild --force'
                }
            }
        }

        stage('Build and Deploy') {
            steps {
                dir('client') {
                    sh 'npm run build'
                    sh '''
                      IP=$(curl -s ifconfig.me)
                      echo "Your Next.js app will run at http://$IP:$PORT"
                      npm start
                    '''
                }
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
