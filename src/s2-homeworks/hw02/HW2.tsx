import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = "low" | "high" | "middle" //
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    debugger
    if (filter === "low") return affairs.filter(a=>a.priority === 'low')
    if (filter === "middle") return affairs.filter(a=>a.priority === 'middle')
    if (filter === "high") return affairs.filter(a=>a.priority === 'high')
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id:number): Array<AffairType> => {
    return affairs.filter((a)=>a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => {
        let newState = deleteAffair(affairs, _id)
        setAffairs(newState)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <hr/>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW2