import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabins could not loaded");
    throw new Error("Cabins could not loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not delete");
  }

  return data;
}

export async function createCabin(newCabinObj) {
  /* https://oecvlvqnqqtrxzwcnmif.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg */

  const imageName = `${Math.random()}-${newCabinObj.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // #1 Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabinObj, image: imagePath }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created!");
  }

  // #2 Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabinObj.image);

  // #3 Delete the cabin IF the was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}
