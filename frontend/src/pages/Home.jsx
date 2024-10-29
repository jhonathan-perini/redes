import ItemTable from '../components/ItemTable';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Estoque Atual</h1>
      <ItemTable />
    </div>
  );
}
