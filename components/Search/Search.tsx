import ReactSelect, { Props, GroupBase } from "react-select";
import {useState} from "react";
import { Button } from "./style";
import { Category, Option } from "@/shared/types";

type searchProps = {
    assetTypes: Option[];
    submitSearchFields: (fields: Category[]) => void;
}
/*
 * TODO: Move to reusable component library
 */
function CustomSelect<
    Option,
    IsMulti extends boolean = true,
    Group extends GroupBase<Option> = GroupBase<Option>
    >(props: Props<Option, IsMulti, Group>){
        
        return (
            <>
                <ReactSelect
                {...props}
                instanceId={'random-uniq-id'}
                theme={(theme) => ({...theme, borderRadius: 0})}
                />
            </>            
        )
    }

export const Search = ({ assetTypes, submitSearchFields }: searchProps) => {

    const [selectedAssetTypes, setSelectedAssetTypes] = useState<string[]>([])

    const submitQuery = () => {
        var selected = selectedAssetTypes as Category[]
        submitSearchFields(selected)
    }

    const onInputChange = (values: Option[]) => {
        const selected = values.map(v => v.label);
        setSelectedAssetTypes(selected);
    }

    return (
        <>
            <CustomSelect
                closeMenuOnSelect={false}
                isMulti
                options={assetTypes}
                onChange={(e) => onInputChange(e as Option[])}
            />
            <Button onClick={submitQuery}>Search</Button>
        </>

    )
}