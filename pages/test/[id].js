import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
    const router = useRouter()

    return (
        <>
            <span>/test/{router.query.id}</span>
            <ul>
                <li><Link href='/test'><a>Link to /test</a></Link></li>
                <li><Link href='/test/'><a>Link to /test/</a></Link></li>
                <li><Link href='/test/a'><a>Link to /test/a</a></Link></li>
                <li><Link href='/test/?id=a'><a>Link to /test/?id=a</a></Link></li>
            </ul>
        </>
    )
}