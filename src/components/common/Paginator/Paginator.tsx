import React from "react";
import styles from "./Paginator.module.css"


export type PaginatorType = {

    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}


export const Paginator = (props: PaginatorType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {


                // @ts-ignore
            return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            }
        )}
    </div>


}
