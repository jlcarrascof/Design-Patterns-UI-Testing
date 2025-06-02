pipeline {
    agent any

    tools {
        nodejs 'NodeJS_22'  // Asegúrate de que esta versión esté definida en Jenkins → Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/jjmartinezf/Design-Patterns-UI-Testing.git', branch: 'main'
            }
        }

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
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo '✅ Todos los tests pasaron.'
        }
        failure {
            echo '❌ Algun test falló.'
        }
    }
}
