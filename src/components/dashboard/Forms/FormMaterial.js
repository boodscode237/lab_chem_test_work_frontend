import {renderInput} from "../../../utils/utils";

export default function FormMaterial () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    {renderInput("id", "id", "Type material id")}
                </div>
                <div className="w-full">
                    {renderInput("material_name", "Name", "Write the materials' name")}
                </div>
                <div className="w-full">
                    {renderInput("synonym", "Synonym", "Synonym", "textarea")}
                </div>
                <div>
                    {renderInput("cas_number", "CAS Number", "Article ID", "number")}
                </div>
                <div>
                    {renderInput("chemical_number", "Chemical Number", "Material ID", "number")}
                </div>
                <div className="sm:col-span-2">
                    {renderInput("user-id", "User Id", "User ID", "number")}
                </div>
            </div>

        </section>
    )
}