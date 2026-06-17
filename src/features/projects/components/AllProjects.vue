<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Link from "../../../components/Link.vue";
import Tag from "../../../components/Tag.vue";
import ArrowRight from "../../../components/icons/ArrowRight.vue";
import { resolveTagVariant } from "../../../components/tagVariants";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { lenis } from "../../../composables/useScroll";
import { useRouter } from "../../../composables/useRouter";
import { useFirstRoute } from "../../../composables/useFirstRoute";
import { getProjects, PROJECT_CATEGORIES } from "../../../content/projects/data";

import type { Locale } from "../../../i18n/types";
import type { ProjectCategory } from "../../../content/projects/data";

const activeFilter = ref<ProjectCategory | "all">("all");

const projects = computed(() => {
  const lang = locale.value as Locale;
  if (!lang) return [];
  return getProjects(lang);
});

const filtered = computed(() => {
  if (activeFilter.value === "all") return projects.value;
  return projects.value.filter((p) => p.category === activeFilter.value);
});

const filters = computed(() => ["all", ...PROJECT_CATEGORIES] as const);

const filterLabel = (filter: ProjectCategory | "all") =>
  filter === "all" ? t("filter-all") : t(`category-${filter}`);

const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const goBack = () => {
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

onMounted(() => {
  lenis.value?.scrollTo(0, { immediate: true });
});
</script>

<template>
  <div class="all-projects">
    <div class="all-projects-inner grid">
      <button
        type="button"
        class="all-projects-back"
        @click="goBack"
        :aria-label="t('go-back')"
        data-cursor="arrow"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="all-projects-back-icon" />
        <span>{{ t("go-back") }}</span>
      </button>
      <header class="all-projects-header">
        <div class="all-projects-header-copy">
          <h1 class="all-projects-title">{{ t("all-projects") }}</h1>
          <p class="all-projects-subtitle">{{ t("projects-subtitle") }}</p>
        </div>
      </header>

      <div class="all-projects-filters">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :class="['all-projects-filter', activeFilter === filter && 'all-projects-filter-active']"
          @click="activeFilter = filter"
        >
          {{ filterLabel(filter) }}
        </button>
      </div>

      <div class="all-projects-grid">
        <Link
          v-for="project in filtered"
          :key="project.slug"
          :to="`/project/${project.slug}`"
          class="all-projects-card"
          :aria-label="t('switch-to-project', { project: project.title })"
          data-cursor="arrow"
          data-sound="click"
          data-hoversound="hover"
        >
          <div class="all-projects-card-image-wrapper">
            <img :src="project.thumbnail" :alt="project.title" class="all-projects-card-image" loading="lazy" />
          </div>
          <div class="all-projects-card-body">
            <h3 class="all-projects-card-title">{{ project.title }}</h3>
            <p class="all-projects-card-description">{{ project.description }}</p>
            <div class="all-projects-card-tags">
              <Tag
                v-for="tag in project.technologies.slice(0, 4)"
                :key="tag"
                :variant="resolveTagVariant(tag)"
                :label="tag"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.all-projects {
  position: relative;
  z-index: var(--z-index-layout);
  width: 100%;
  min-height: calc(var(--lvh) * 100);
  background-color: var(--color-beige-400);
  color: var(--color-text-400);
  padding: calc(var(--height-header) + var(--space-xl)) var(--space-outer) var(--space-xxxl);

  &-inner {
    width: 100%;
  }

  &-back {
    grid-column: 1 / 13;
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    width: fit-content;
    margin-bottom: var(--space-lg);
    padding: var(--space-xs) var(--space-md) var(--space-xs) var(--space-sm);
    border-radius: var(--radius-md);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background: transparent;
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    font-size: var(--font-size-sm);
    font-weight: 700;
    cursor: pointer;
    transition:
      background-color 0.1s ease-in-out,
      border-color 0.1s ease-in-out;

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }

    @include mixins.hover {
      &:hover {
        background-color: var(--color-grayscale-400);
        border-color: var(--color-brand-400);
      }
    }

    &-icon {
      width: var(--icon-size-sm);
      transform: rotate(180deg);
    }
  }

  &-header {
    grid-column: 1 / 13;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }
  }

  &-subtitle {
    margin-top: var(--space-sm);
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    max-width: 640px;
  }

  &-filters {
    grid-column: 1 / 13;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-filter {
    cursor: pointer;
    padding: var(--space-xs) var(--space-md);
    border-radius: var(--radius-md);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background: transparent;
    color: var(--color-text-300);
    font-size: var(--font-size-sm);
    font-weight: 700;
    transition:
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;

    &-active {
      background-color: var(--color-accent-400);
      border-color: var(--color-accent-400);
      color: var(--color-accent-text-400);
    }
  }

  &-grid {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-image-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-beige-500);
      aspect-ratio: 16/9;
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease-in-out;
    }

    @include mixins.hover {
      &:hover .all-projects-card-image {
        transform: scale(1.04);
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    &-title {
      font-size: var(--font-size-title-xs);
      font-weight: 700;
      color: var(--color-text-400);
    }

    &-description {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      line-height: var(--line-height-copy);
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: var(--space-xs);
    }
  }
}
</style>
