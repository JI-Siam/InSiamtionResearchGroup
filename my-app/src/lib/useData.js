'use client'

import { useEffect, useState } from 'react';

export default function useData(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    fetch('/data.json')
      .then((r)=>r.json())
      .then((json)=>{ if(mounted){ setData(json); setLoading(false); } })
      .catch(()=>{ if(mounted){ setData(null); setLoading(false); } });
    return ()=>{ mounted = false };
  },[])

  return {data, loading};
}
