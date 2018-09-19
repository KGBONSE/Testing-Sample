env.stage = 'final'

pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
              script {
                if (params.build) {

                  if (params.branch == 'master') {
                    env.stage = 'final'
                    sh "git checkout ${params.branch}"
                    sh "git pull"
                    sh "git reset --hard HEAD"
                    sh "./gradlew cucumber"

                  }

                  if (params.branch == 'develop') {
                    env.stage = 'milestone'
                    sh "git checkout ${params.branch}"
                    sh "git pull"
                    sh "git reset --hard HEAD"
                    sh "./gradlew cucumber"

                  }
                }
                else{
                  println("Not going to do a build")
                }
              }
            }
        }

}
    post {
        failure {
            notifyFailed("Something failed...")
            error "Something failed..."
        }
    }
}


def notifyFailed(errorTxt) {
  echo errorTxt
  emailext (
    subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",

    body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
      <p>Check console output at "<a href="${env.BUILD_URL}">${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>"</p>""",

    // Sends email to the list of users suspected of causing the build to begin failing.
    recipientProviders: [[$class: 'DevelopersRecipientProvider']]

    // Default receiver of all failed mails
    //,to: "ekmabo@danskespil.dk"
  )
}

