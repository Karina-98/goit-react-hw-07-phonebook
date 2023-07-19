import { createSelector } from "@reduxjs/toolkit";


export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.filter.filter;

