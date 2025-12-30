<script lang="ts">
  // import FingerprintJS from '@fingerprintjs/fingerprintjs'
  // const fpPromise = FingerprintJS.load()

  const getFingerprint = () => {
    // const fp = await fpPromise;
    // const result = await fp.get()
    // console.log(result.visitorId);
    // return result.visitorId;
    return Promise.resolve('dssfdsfdsf');
  }

</script>

<div>
  {#await getFingerprint()}
    <p>waiting for the promise to resolve...</p>
  {:then value} 
    <p>{value}</p>
  {/await}
</div>