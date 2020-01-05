import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center'
    }
}

export default function Loading({ text = 'Loading', speed = 300 }) {
    const [ content, setContent ] = React.useState(text)
    const intervalRef = React.useRef()

    const clear = () => window.clearInterval(intervalRef.current)

    React.useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setContent((content) => {
                return content === `${text}...`
                    ? text
                    : `${content}.`
            })
        }, speed)

        return clear
    }, [text, speed])

    return (
        <p style={styles.content}>
            {content}
        </p>
    )
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}