import { state } from "./state";
import * as actions from "./actions";
import { createStateHook, createActionsHook, createEffectsHook, createReactionHook } from "overmind-react";
export const config = {
  state,
  actions,
};

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
