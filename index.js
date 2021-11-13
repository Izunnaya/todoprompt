let campgrounds = [
    { number: 1, view: 'ocean', partySize: 8, isReserved: false },
    { number: 5, view: 'ocean', partySize: 4, isReserved: false },
    { number: 12, view: 'ocean', partySize: 4, isReserved: true },
    { number: 18, view: 'forest', partySize: 4, isReserved: false },
    { number: 23, view: 'forest', partySize: 4, isReserved: true }
  ];
  
  
  function findMyCampsites(campgrounds, view, partySize) {
    let campsites = [];
    for (let i = 0; i < campgrounds.length; i++) {
      if (campgrounds[i].view === view && campgrounds[i].partySize == partySize && !campgrounds[i].isReserved) {
        campsites.push(campgrounds[i].number);
      }
    }
    return campsites.length>0 ?
      campsites : 'Sorry, no campsites with that view are available to host your party';
  }
  
  console.log(findMyCampsites(campgrounds, 'ocean', 4));
  console.log(findMyCampsites(campgrounds, 'forest', 6));
  