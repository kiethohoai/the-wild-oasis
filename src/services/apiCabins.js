import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabinObj])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created!");
  }

  return data;
}
