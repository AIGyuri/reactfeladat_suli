import { useState } from 'react';

const FeladatLista = () => {
  const [feladatok, setFeladatok] = useState([]);
  const [ujFeladat, setUjFeladat] = useState({ szoveg: "", kesz: false});
  const [szuro, setSzuro] = useState('osszes');

  const saveFeladatok = () => {
    localStorage.setItem('feladatok', JSON.stringify(feladatok));
  };

  const ujFeladatHozzaadas = () => {
    setFeladatok([...feladatok, ujFeladat]);
    saveFeladatok();
  };

  return (
    <div className='text-center bg-stone-400 min-h-screen p-5'>
      <input className='rounded mx-2' type="text" value={ujFeladat.szoveg} onChange={(e) => setUjFeladat( {...ujFeladat, szoveg: e.target.value})} />
      <button className='rounded m-2 px-2 bg-gray-50' onClick={ujFeladatHozzaadas}>Feladat hozzáadás</button>

      <div className='flex justify-center mt-5'>
      <button className={`rounded mx-2 px-2 bg-red-500 ${szuro === 'folyamatban' ? 'bg-gray-50' : ''}`} onClick={() => setSzuro('folyamatban')}>Folyamatban</button>
        <button className={`rounded mx-2 px-2 bg-white-400 ${szuro === 'osszes' ? 'bg-gray-50' : ''}`} onClick={() => setSzuro('osszes')}>Mind</button>
        <button className={`rounded mx-2 px-2 bg-green-500 ${szuro === 'kesz' ? 'bg-gray-50' : ''}`} onClick={() => setSzuro('kesz')}>Kész</button>
        
      </div>

      <ul>
        {feladatok.filter((feladat) => {
          if (szuro === 'osszes') return true;
          if (szuro === 'kesz') return feladat.kesz;
          if (szuro === 'folyamatban') return !feladat.kesz;
        }).map((feladat, index) => (
          <li className='p-3 space-y-2' key={index}>
            {feladat.szoveg} {feladat.kesz ? (
              <button className='rounded mx-2 px-2 bg-green-500'>Kész</button>
            ) : (
              <button className='rounded mx-2 px-2 bg-gray-300' disabled>Nincs Kész</button>
            )}
            <input className='mx-2' value={feladat.kesz} onChange={(e) => setFeladatok(feladatok.map((f, i) => (i === index ? { ...f, kesz: e.target.checked } : f)))}type="checkbox"/>
            <button className='rounded mx-2 px-2 bg-red-500' onClick={() => setFeladatok(feladatok.filter((f, i) => i !== index))}>Töröl</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeladatLista;