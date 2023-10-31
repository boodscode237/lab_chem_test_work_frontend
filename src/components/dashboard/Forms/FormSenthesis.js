import {renderInput} from "../../../utils/utils";

export default function FormSenthesis () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                    {renderInput("id", "id", "Type material id", "number")}
                </div>
                <div className="w-full">
                    {renderInput("nano_particles_id", "Nano-particle id", "Nano particles' id", "number")}
                </div>
                <div className="w-full">
                    {renderInput("article_id", "Article Id", "Article Id", "number")}
                </div>
                <div className="w-full">
                    {renderInput("method", "Method", "Method", "textarea")}
                </div>
            </div>

        </section>
    )
}