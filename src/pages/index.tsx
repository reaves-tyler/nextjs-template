// import { useSession } from 'next-auth/react';
import { Card } from 'antd';
import useSwr from 'swr';
import { SiteMenu } from '../components/SiteMenu';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
    // const { data: session } = useSession();

    const { data, error } = useSwr(`/api/data`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <>
            <SiteMenu />
            {data?.Countries.map((item, i) => (
                <>
                    <Card title={item.Country}>
                        <p>{Intl.NumberFormat().format(item.TotalConfirmed)}</p>
                    </Card>
                </>
            ))}
        </>
    );
}
