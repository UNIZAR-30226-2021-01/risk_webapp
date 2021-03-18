import PropTypes from 'prop-types'

export const Header = ({onAdd, showAdd}) => {
    // Para saber por qué pag estás siendo invocado

    return (
        <header className='header'>
            <h1 id="title-small">RISK</h1>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header