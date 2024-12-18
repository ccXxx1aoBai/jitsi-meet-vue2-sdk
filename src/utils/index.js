/**
 * Returns the complete room name
 *
 * @param {string} roomName
 * @param {string|undefined} tenant
 * @returns {string} the complete room name
 */
export const getRoomName = (roomName, tenant) => {
  if (tenant) {
    return `${tenant}/${roomName}`;
  }

  return roomName;
};

let instancesCounter = 0;
/**
 * Generates a unique id
 * @param {string} prefix
 * @returns {string} the component id
 */
export const generateComponentId = (prefix) =>
  `${prefix}-${instancesCounter++}`;

import { DEFAULT_DOMAIN } from "../constants";

const loadExternalApi = async (domain) =>
  new Promise((resolve, reject) => {
    if (window.JitsiMeetExternalAPI) {
      return resolve(window.JitsiMeetExternalAPI);
    }

    const externalApiScript =
      document.createElement("script");

    externalApiScript.async = true;
    externalApiScript.src = `/external_api.js`;

    externalApiScript.onload = () => resolve(window.JitsiMeetExternalAPI);
    externalApiScript.onerror = () =>
      reject(new Error(`Script load error: ${externalApiScript.src}`));

    document.head.appendChild(externalApiScript);
  });

let scriptPromise;

/**
 * Injects the external_api.js script for the corresponding domain in DOM
 * and resolves with either the `JitsiMeetExternalApi` class definition or an error
 *
 * @param {string} domain - The domain of the external API
 * @returns {Promise<JitsiMeetExternalApi>} - the JitsiMeetExternalAPI or an error
 */
export const fetchExternalApi = (
  domain = DEFAULT_DOMAIN
) => {
  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = loadExternalApi(domain);

  return scriptPromise;
};
