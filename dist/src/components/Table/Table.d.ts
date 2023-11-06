import * as React from 'react';
import { IColumn } from './IColumn';
export { IColumn };
export interface ITableProps {
    id?: string;
    portal?: boolean;
    dataSource?: Array<Object> | Array<number> | Array<string>;
    columns?: Array<IColumn>;
    detailTemplate?: (element: Array<Object>) => JSX.Element;
    hideHeader?: boolean;
    pageSize?: number;
    page?: number;
    detailTemplateOnOpen?: (element: Array<Object>) => any;
    detailTemplateSelectedElements?: Array<Object>;
    selectedElements?: Array<Object>;
    rowIsSelectable?: boolean | 'single' | 'multi';
    checkable?: boolean;
    hideCheckAll?: boolean;
    onCheck?: (event: React.MouseEvent<HTMLInputElement>) => void;
    detailTemplateHideToggle?: boolean;
    hideColumns?: Array<string>;
    onRowSelect?: (element?: Array<Object>, key?: string | number, selectedElements?: Array<Object>, id?: string) => void;
    pageSizerOptions?: Array<number>;
    onPageSizeChange?: (event: React.MouseEvent<HTMLElement>) => void;
    onPageChange?: any;
    sortable?: boolean;
    searchableKeys?: Array<any>;
    searchTitle?: string;
    className?: string;
    detailTemplateOpenOnRowSelect?: boolean | "single";
    rowCount?: number;
    hidePageSize?: boolean;
    onSort?: Function;
    sortType?: "asc" | "desc";
    sortKey?: string;
    showDataSourceLength?: boolean;
    selectedKey?: string;
    flex?: boolean;
    menuTemplate?: any;
    focusOnMount?: boolean;
    contentMaxHeight?: number;
    filterRow?: any;
    filterOpenDetailTemplate?: any;
    toggleSorting?: any;
    toggleSelectedElements?: any;
    selectAll?: any;
    previousPage?: any;
    nextPage?: any;
    gotoPage?: any;
    firstPage?: any;
    lastPage?: any;
    detailTemplateToggleSelectedElements?: any;
    changePageSize?: any;
    isArray?: any;
    numberOfPages?: any;
    numberPerPage?: any;
    activeRows?: any;
    filteredItems?: any;
    detailTemplateToggleAll?: any;
    searchTerm?: any;
    filterItems?: any;
    title?: string;
    hideFooter?: boolean;
    scrollToId?: any;
    scrollIf?: any;
    loading?: boolean;
    searchValue?: string;
    searchFilter?: any;
    onSearchChange?: (term: string) => void;
    headerTemplate?: () => void;
    serverSide?: boolean;
    disableSelectedElements?: Array<any>;
    fill?: boolean;
}
declare const _default: any;
export default _default;