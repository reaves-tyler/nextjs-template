// import { useSession } from 'next-auth/react';
import { Card } from 'antd';
import useSwr from 'swr';
import { SiteMenu } from '../components/SiteMenu';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
    // const { data: session } = useSession();

    const { data } = useSwr(`/api/data`, fetcher);

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
