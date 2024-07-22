import toast from "react-hot-toast";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const { mutate: editCabin, isLoading: isEditting } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      QueryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditting };
}

export default useEditCabin;
