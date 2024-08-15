import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
