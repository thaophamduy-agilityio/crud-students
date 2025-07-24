// Libs
import { JSX } from "react";

// Components
import { Button, IconButton, Text } from "@components/";
import { SortIcon } from "@components/Icon";

//Interfaces
interface HeaderTableProps {
    onToggleSort: () => void;
    onAdd: () => void;
}

/**
 * Primary UI component for user interaction
 */
const HeaderTable = ({ onToggleSort, onAdd }: HeaderTableProps): JSX.Element =>
    <div className="table-header">
        <div className="table-header-left">
            <Text
                type="h2"
                size="2xl"
                additionalClasses="table-header-title"
            >
                Students List
            </Text>
        </div>
        <div className="table-header-right">
            <IconButton
                additionalClasses="icon-sort"
                onClick={onToggleSort}
            >
                <SortIcon />
            </IconButton>
            <Button
                label="Add new students"
                onClick={onAdd} />
        </div>
    </div>;
    
export default HeaderTable;