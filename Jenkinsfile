pipeline {
  agent any
  environment {
    NODE_ENV = 'production'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        echo 'Building project (vite + esbuild)...'
        // Build both front-end and server bundle (server/index.ts -> dist/index.js)
        sh 'npm run build'
      }
    }

    stage('Archive') {
      steps {
        echo 'Archiving build artifacts...'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Start (smoke)') {
      steps {
        echo 'Starting app (smoke test)'
        // Run start command for a short smoke test; in CI you may prefer not to run a long-lived server.
        sh 'npm run start -- --host & sleep 3; ps aux | grep node'
      }
    }
  }

  post {
    always {
      echo 'Cleaning workspace'
      deleteDir()
    }
    success {
      echo 'Build succeeded'
    }
    failure {
      echo 'Build failed - check console output'
    }
  }
}
