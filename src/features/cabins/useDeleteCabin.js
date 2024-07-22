/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteCabin as deleteCabinAPI,
  getCabins,
} from "../../services/apiCabins";
import toast from "react-hot-toast";

// todo useDeleteCabin
export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinAPI(id),
    onSuccess: () => {
      toast.success("Cabin successfully delete");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
        queryFn: getCabins,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
