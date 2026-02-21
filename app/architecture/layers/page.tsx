import { redirect } from 'next/navigation';

// Redirect to the main memory-layers concept page
export default function LayersPage() {
  redirect('/concepts/memory-layers');
}
