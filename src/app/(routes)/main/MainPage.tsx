import { createServerSideClient } from '@/util/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';

type TestResponse = {
  id: number;
  created_at: number;
  contents: string;
};

export const MainPage = async () => {
  const supabase = await createServerSideClient();

  const {
    data: dataList,
    error,
  }: {
    data: TestResponse[] | null;
    error: PostgrestError | null;
  } = await supabase.from('TestTable').select('*');

  if (error) {
    console.log(error);
    return <div>Error loading data</div>;
  }

  if (dataList === null) return <div>Data are null.</div>;

  return (
    <div>
        {dataList.map((data) => {
          return (
            <div key={data.id}>
              <p>id: {data.id}</p>
              <p>created_at: {data.created_at}</p>
              <p>contents: {data.contents}</p>
            </div>
          );
        })}
    </div>
  );
};
