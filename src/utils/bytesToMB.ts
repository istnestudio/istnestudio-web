const bytesToMb = ( bytes: number ) =>
  parseFloat(( bytes / 1024 / 1000 ).toFixed(2));

export default bytesToMb;