pipeline {
    agent any

    tools {
        nodejs 'NodeJS_22'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run UI Tests') {
            steps {
                bat 'npm run test:e2e'
            }
        }
    }

    post {
        success {
            echo '✅ Todos los tests pasaron exitosamente.'
        }
        failure {
            echo '❌ Algún test falló.'
        }
    }
}
