import React, { useEffect, useState } from "react";
import _ from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import { Search } from "../Search";
import { Feed } from "../Feed";
import { Post, Category, Option } from "@/shared/types";
import dynamic from "next/dynamic";

const GridLayout = WidthProvider(RGL);

const grid = [
    {i: "map-container", x: 0, y: 0, w: 1, h: 3},
    {i: "search-container", x: 1, y: 0, w: 1, h: 3},
    {i: "results-container", x: 0, y: 1, w: 2, h: 4}
];

type gridProps = {
    posts: Post[],
    categories: Category[],
    options: Option[],
    className?: string,
    isDraggable?: boolean,
    isResizable?: boolean,
    items?: number,
    cols?: number,
    rowHeight?: number,
};

export const Grid = ({posts, categories, options, className="layout", isDraggable=false, isResizable=false, items=2, cols=2, rowHeight=100}: gridProps) => {

    const [layoutState, setLayoutState] = useState<Layout[]>([]);

    const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);

    useEffect(() => {
        const layout: Layout[] = grid;
        setLayoutState(layout);
    }, [])

    const performQuery = (fields: Category[]) => {
        console.log(fields)
        setFilteredCategories(fields)
    }

    // disable server-side rendering for MapWrapper because Open Layers 
    // is dependent on the browser's window API to work
    // which is not available on the server side
    const MapWrapper = dynamic(() => import('../Map/MapWrapper').then((res) => res.MapWrapper),
        {
            ssr: false
        }
    )

    return (
        <GridLayout
            layout={layoutState}
            className={className}
            isDraggable={isDraggable}
            isResizable={isResizable}
            cols={cols}
            rowHeight={rowHeight}
        >
            <div key='map-container'>
                <MapWrapper features={[]}/>
            </div>
            <div key='search-container'>
                <Search assetTypes={options} submitSearchFields={performQuery}/>
            </div>
            <div key='results-container'>
                <Feed posts={posts} categories={filteredCategories} />
            </div>
        </GridLayout>
    )
}