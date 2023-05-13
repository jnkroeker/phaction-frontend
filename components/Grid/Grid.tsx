import React, { useEffect, useState } from "react";
import _ from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import { Search } from "../Search";
import { Feed } from "../Feed";
import { Post, Category } from "@/shared/types"

const GridLayout = WidthProvider(RGL);

type gridProps = {
    posts: Post[],
    categories: Category[],
    className?: string,
    isDraggable?: boolean,
    isResizable?: boolean,
    items?: number,
    cols?: number,
    rowHeight?: number,
};

export const Grid = ({posts, categories, className="layout", isDraggable=false, isResizable=false, items=2, cols=2, rowHeight=100}: gridProps) => {

    const [layoutState, setLayoutState] = useState<Layout[]>([]);

    useEffect(() => {
        const layout: Layout[] = generateLayout()
        setLayoutState(layout);
    }, [])

    const performQuery = (fields: string[]) => {
        console.log(fields)
    }

    // BAD HACK: figure out how to render two components inside the react-grid-layout?
    const generateDOM = () => {
        return _.map(_.range(items), function(i) {
            if (i == 1) {
                return (
                    <div key={i}>
                        <Feed key={2} posts={posts} categories={categories} />
                    </div>
                )
            } else {
                return (
                    <div key={i}>
                        <Search assetTypes={['Skiing', 'Cycling', 'Crossfit']} submitSearchFields={performQuery}/>
                    </div>
                )
            }
        })
    }

    const generateLayout = (): Layout[] => {
        return _.map(new Array(items), function(item, i) {
            var y: number = Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i/6) * y,
                w: 2,
                h: y,
                i: i.toString()
            };
        });
    }

    return (
        <GridLayout
            layout={layoutState}
            className={className}
            isDraggable={isDraggable}
            isResizable={isResizable}
            cols={cols}
            rowHeight={rowHeight}
        >
            {generateDOM()}
        </GridLayout>
    )
}