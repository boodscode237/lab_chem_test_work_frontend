import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

export default function LoginView() {
    return(

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="">
                        <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://i.pinimg.com/originals/bc/46/3e/bc463e99a93b29474de76bfe8aea7163.jpg" alt="image description"/>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <LoginComponent/>
                    </div>
                </div>
            </div>
        </section>

    )
}