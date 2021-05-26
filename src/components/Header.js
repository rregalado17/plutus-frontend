
import PropTypes from 'prop-types'

const Header = ( {title}) => {
    return (
        <header>{title}</header>
    )
}

Header.defaultProps = {
    title: 'Cryptocoin Marketplace',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
