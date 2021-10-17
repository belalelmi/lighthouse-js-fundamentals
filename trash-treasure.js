
const smartGarbage = (trash, bins) => {
  if (trash === 'recycling' || trash === 'waste' || trash === 'compost') {
    bins[trash]++;
  }
  return bins;
};




console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));




/*{
waste: 4,
  recycling: 3,
    compost: 5
]*/

