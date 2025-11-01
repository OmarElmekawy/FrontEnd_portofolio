function Projects() {
  return (
    <>
      <h2 className="flex justify-center pt-[70px] text-4xl">
        Front-End Projects
      </h2>
      <div className="w-screen flex justify-center h-screen items-start pt-[100px]">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Project management app
            </h3>
            <p className="text-gray-600 mb-4">React Project</p>
            <div className="mt-auto flex gap-4">
              <a
                href="https://proj-managment-react-app-222.netlify.app"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OmarElmekawy/ProjectManagement"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Tic Tac Toe Game App
            </h3>
            <p className="text-gray-600 mb-4">React Project</p>
            <div className="mt-auto flex gap-4">
              <a
                href="https://tictactoe233.netlify.app "
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OmarElmekawy/TicTacToe"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Quiz app
            </h3>
            <p className="text-gray-600 mb-4">React Project</p>
            <div className="mt-auto flex gap-4">
              <a
                href="https://quizreact-app22.netlify.app "
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OmarElmekawy/QuizApp"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Job listing app
            </h3>
            <p className="text-gray-600 mb-4">Vue project</p>
            <div className="mt-auto flex gap-4">
              <a
                href="https://joblistingvue3.netlify.app/ "
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OmarElmekawy/job-Listing"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Form App
            </h3>
            <p className="text-gray-600 mb-4">Vue project</p>
            <div className="mt-auto flex gap-4">
              <a
                href="https://creatingforminvue.netlify.app/form "
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OmarElmekawy/Creating-Form-in-Vue"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
