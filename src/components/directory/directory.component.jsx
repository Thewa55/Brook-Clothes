import React from 'react'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

const Directory = () => {

    const {directory} = useSelector( state => ({
      directory: state.directory
    }))

    const sections = selectDirectorySections(directory)

    return (
        <div className='directory'>
            {sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
        </div>
    )
}

export default Directory;