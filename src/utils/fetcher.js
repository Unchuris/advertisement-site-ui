/**
 * Fetcher.
 */

import fetch from 'isomorphic-fetch';
import { Promise } from 'es6-promise';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function getResponseJson(response) {
  return response.json();
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => checkStatus(response))
    .then((json) => getResponseJson(json))
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export function post(url, body) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(body),
  })
    .then((response) => checkStatus(response))
    .then((json) => getResponseJson(json))
    .then((body) => {
      return body;
    })
    .catch((error) => {
      return error;
    });
}

export function put(url, requestData) {
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }),
    body: requestData,
  })
    .then((response) => checkStatus(response))
    .then((json) => getResponseJson(json))
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export function del(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => checkStatus(response))
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}