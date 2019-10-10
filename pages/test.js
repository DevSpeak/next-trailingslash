import Link from 'next/link'

export default () => (
    <>
        <span>/test</span>
        <ul>
            <li><Link href='/test'><a>Link to /test</a></Link></li>
            <li><Link href='/test/'><a>Link to /test/</a></Link></li>
            <li><Link href='/test/a'><a>Link to /test/a</a></Link></li>
            <li><Link href='/test/?id=a'><a>Link to /test/?id=a</a></Link></li>
        </ul>
    </>
)