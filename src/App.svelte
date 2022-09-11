<script lang="ts">
  // Load database from Firebase
  import { setContext } from 'svelte'
  import { addDoc, collection, doc } from 'firebase/firestore'
  import db from './utils/firebase'

  setContext('db', db)

  // Add item
  const addItem = async () => {
    await addDoc(collection(db, 'items'), { name: 'carrot' })
  }
</script>

<button on:click={addItem} />
