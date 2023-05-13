import Select from "react-select";
import {useState} from "react";
import { Button } from "./style";

type searchProps = {
    assetTypes: string[];
    submitSearchFields: (fields: string[]) => void;
}

export const Search = ({ assetTypes, submitSearchFields }: searchProps) => {
    const [selectedAssetTypes, setSelectedAssetTypes] = useState<string[]>([])

    const onInputChange = (value: string[]) => {
        setSelectedAssetTypes(value)
    }

    const submitQuery = () => {
        submitSearchFields(selectedAssetTypes)
    }

    return (
        <>
            <Select
                closeMenuOnSelect={false}
                isMulti
                options={assetTypes}
                onChange={(e) => onInputChange(e as string[])}
            />
            <Button onClick={submitQuery}>Search</Button>
        </>

    )
}