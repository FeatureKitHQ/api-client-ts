/* tslint:disable */
/* eslint-disable */
/**
 * FeatureKit API
 * FeatureKit is a comprehensive feedback management platform designed for product teams to collect, organize, and act on user feedback.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@usefeaturekit.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { RegistrationRequest } from '../model';
// @ts-ignore
import type { TeamMemberAuthRequest } from '../model';
// @ts-ignore
import type { TeamMemberAuthResponse } from '../model';
// @ts-ignore
import type { UserAuthRequest } from '../model';
// @ts-ignore
import type { UserAuthResponse } from '../model';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new user and organization
         * @param {RegistrationRequest} registrationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (registrationRequest: RegistrationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registrationRequest' is not null or undefined
            assertParamExists('register', 'registrationRequest', registrationRequest)
            const localVarPath = `/auth/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registrationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {TeamMemberAuthRequest} teamMemberAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        teamToken: async (teamMemberAuthRequest: TeamMemberAuthRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'teamMemberAuthRequest' is not null or undefined
            assertParamExists('teamToken', 'teamMemberAuthRequest', teamMemberAuthRequest)
            const localVarPath = `/auth/staff/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(teamMemberAuthRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {UserAuthRequest} userAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userToken: async (userAuthRequest: UserAuthRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userAuthRequest' is not null or undefined
            assertParamExists('userToken', 'userAuthRequest', userAuthRequest)
            const localVarPath = `/auth/user/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userAuthRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new user and organization
         * @param {RegistrationRequest} registrationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(registrationRequest: RegistrationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamMemberAuthResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(registrationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.register']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {TeamMemberAuthRequest} teamMemberAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async teamToken(teamMemberAuthRequest: TeamMemberAuthRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamMemberAuthResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.teamToken(teamMemberAuthRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.teamToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {UserAuthRequest} userAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userToken(userAuthRequest: UserAuthRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserAuthResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userToken(userAuthRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.userToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new user and organization
         * @param {RegistrationRequest} registrationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(registrationRequest: RegistrationRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamMemberAuthResponse> {
            return localVarFp.register(registrationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {TeamMemberAuthRequest} teamMemberAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        teamToken(teamMemberAuthRequest: TeamMemberAuthRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamMemberAuthResponse> {
            return localVarFp.teamToken(teamMemberAuthRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Authenticate a user or team member
         * @param {UserAuthRequest} userAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userToken(userAuthRequest: UserAuthRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserAuthResponse> {
            return localVarFp.userToken(userAuthRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Create a new user and organization
     * @param {RegistrationRequest} registrationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public register(registrationRequest: RegistrationRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).register(registrationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Authenticate a user or team member
     * @param {TeamMemberAuthRequest} teamMemberAuthRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public teamToken(teamMemberAuthRequest: TeamMemberAuthRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).teamToken(teamMemberAuthRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Authenticate a user or team member
     * @param {UserAuthRequest} userAuthRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public userToken(userAuthRequest: UserAuthRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).userToken(userAuthRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

