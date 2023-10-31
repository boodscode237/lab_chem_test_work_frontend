import {renderInput} from "../../../utils/utils";

export default function ArticleForm () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                    {renderInput("id", "id", "Type material id","number")}
                </div>
                <div className="w-full">
                    {renderInput("article_name", "Article Name", "Write the materials' name")}
                </div>
            </div>

        </section>
    )
}