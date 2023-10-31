import {renderInput} from "../../../utils/utils";

export default function FormNanoparticles () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="">
                    {renderInput("id", "id key", "Type material id")}
                </div>
                <div className="sm:col-span-2">
                    {renderInput("nano-particle", "Nano Particle", "Product brand")}
                </div>
                <div className="sm:col-span-2">
                    {renderInput("size", "Size", "Product size", "number")}
                </div>
                <div>
                    {renderInput("article-id", "Article Id", "Article ID", "number")}
                </div>
                <div className="">
                    {renderInput("material-id", "Material Id", "Material ID", "number")}
                </div>
                <div className="">
                    {renderInput("user-id", "User Id", "User ID", "number")}
                </div>
            </div>

        </section>
    )
}