# @fromforgesoftware/angular-kit

Angular toolkit — Angular counterpart to `ts-kit` / `vue-kit`. One package, sub-modules under subpath exports.

**Status**: dormant. Source is preserved from the previous five `@fromforgesoftware/angular-*` packages but the build/test pipeline isn't wired and the package isn't in CI `ACTIVE`. Reactivate when a downstream Angular consumer needs it.

## Sub-modules

| Subpath                                                 | Source                                                  |
| ------------------------------------------------------- | ------------------------------------------------------- |
| `@fromforgesoftware/angular-kit/jsonapi`                | was `@fromforgesoftware/angular-jsonapi`                |
| `@fromforgesoftware/angular-kit/log`                    | was `@fromforgesoftware/angular-log`                    |
| `@fromforgesoftware/angular-kit/storage`                | was `@fromforgesoftware/angular-storage`                |
| `@fromforgesoftware/angular-kit/ui`                     | was `@fromforgesoftware/angular-ui`                     |
| `@fromforgesoftware/angular-kit/resource-state-manager` | was `@fromforgesoftware/angular-resource-state-manager` |

## Reactivation checklist

When you bring this back online:

1. Add `@fromforgesoftware/angular-kit` to `nx.json` `release.projects`
2. Add it to `.github/workflows/ci.yaml` `ACTIVE` env + `.husky/pre-push` `ACTIVE`
3. Add a `build` target to `project.json` (likely ng-packagr or rollup with project references)
4. Verify the per-subpath `index.ts` barrels under `src/*/` are still valid (they were the public surfaces of the old separate libs)
5. Update internal cross-references — they were sed-converted from `@fromforgesoftware/angular-X` → `@fromforgesoftware/angular-kit/X` so they should resolve via the subpath exports once the build emits them
