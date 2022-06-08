import { useSession } from 'next-auth/react';
import useSwr from 'swr';
import { SiteMenu } from '../components/SiteMenu';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
    const { data: session } = useSession();

    const { data, mutate } = useSwr(`/api/data`, fetcher);

    return (
        <>
            <SiteMenu />
            {JSON.stringify(data)}
        </>
    );
}
