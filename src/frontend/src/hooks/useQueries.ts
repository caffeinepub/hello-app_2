import { useMutation } from "@tanstack/react-query";
import type { Greeting } from "../backend.d";
import { useActor } from "./useActor";

export function useGreet() {
  const { actor } = useActor();
  return useMutation<Greeting, Error, string>({
    mutationFn: async (name: string) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.greet(name);
    },
  });
}
