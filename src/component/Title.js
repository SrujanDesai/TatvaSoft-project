import react from 'react'

function Title(props){

    const {name,Title,Description} = props

    return <h1>Hello {name} {Title} {Description}</h1>
};

export default Title